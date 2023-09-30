const ambiente = 'local';
const urlAmbiente = {
    local:
    {
        // Chequear la IP del PC y reemplazar
        host: 'http://192.168.1.14:3002',
    },
};

const initConfig = {
    ambiente: ambiente,
    host: urlAmbiente[ambiente].host,
}

export default initConfig;
