let auto = {
    color: "blanco",
    marca: "niisan",
    modelo: "yama 200",
    estado: false,

    encender: () => {
        auto.estado = true;
    },

    apagar: () => {
        auto.estado = false;
    },
}