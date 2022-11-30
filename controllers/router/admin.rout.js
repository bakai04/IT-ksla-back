import AdminBro from "admin-bro";
import AdminBroExpress from "@admin-bro/express";
import AdminBroMongoose from "@admin-bro/mongoose";
import mongoose from "mongoose";

const ADMIN = {
  email: 'test@example.com',
  password: 'password',
}

AdminBro.registerAdapter(AdminBroMongoose)
export const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
})

const adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: process.env.ADMIN_COOKIE_NAME || 'adminbro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'somePassword',
});

export default adminRouter;
