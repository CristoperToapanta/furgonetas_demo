const ambiente = 'local';
const urlAmbiente = {
    local:
    {
        // Chequear la IP del PC y reemplazar
        host: 'http://192.168.1.6:3002', // Casa
        // host: 'http://192.168.1.27:3002' // Casa Cable
        // host: 'http://192.168.1.10:3002', // Patio

    },
};

const initConfig = {
    ambiente: ambiente,
    host: urlAmbiente[ambiente].host,
}

export default initConfig;
