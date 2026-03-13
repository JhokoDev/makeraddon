export function manifestBPTemplate(data: any) {
    
    return {
    format_version: 3,

    header: {
      name: data.name,
      description: data.description,
      uuid: data.headerUuid,
      version: "1.0.0",
      min_engine_version: "1.26.0"
    },

    modules: [
      {
        type: "data",
        uuid: data.moduleUuid,
        version: "1.0.0"
      }
    ],
    metadata: {
        authors: ["Your Name"],
        product_type: "addon"
    }

  };
  
}