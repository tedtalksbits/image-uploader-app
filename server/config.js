const getAppConfig = () => {
    const environments = {
        development: {
            uri: process.env.DEV_MONGODB_URI,
            port: process.env.PORT || 3090,
        },
        production: {
            uri: process.env.PROD_MONGODB_URI,
            port: process.env.PORT || 80,
        },
    };

    return environments[process.env.NODE_ENV];
};

export default getAppConfig;
