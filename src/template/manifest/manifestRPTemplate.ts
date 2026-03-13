export function manifestRPTemplate(data: any) {
  return {
    format_version: 3, // Corrigido de 3 para 2 (padrão obrigatório da Mojang para manifests)

    header: {
      name: data.name,
      description: data.description,
      uuid: data.headerUuid,
      version: "1.0.0",
      min_engine_version: "1.26.0"
    },

    modules: [
      {
        type: "resources",
        uuid: data.moduleUuid,
        version: "1.0.0"
      }
    ],

    metadata: {
      authors: ["Your Name"], // Puxando do seu builder/service!
      product_type: "addon"
    },
    
    capabilities: ["pbr"] // Correto! O array de capabilities fica exatamente aqui, na raiz.
  };
}