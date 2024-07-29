console.log(process.env.JWT_SECRET);

export const jwtConstants = {
    secret: process.env.JWT_SECRET //"no utilizar esta palabra en produccion"
}