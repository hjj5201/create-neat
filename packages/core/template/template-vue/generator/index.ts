import { templateToBuildToolProtocol } from "../../../src/configs/protocol.js";
import TemplateAPI from "../../../src/models/TemplateAPI.js";
import pluginVue from "../index.js";

const templateConfig = (templateAPI: TemplateAPI) => {
  const buildTool = templateAPI.generator.buildTool
  const params = pluginVue(buildTool)
  templateAPI.extendPackage({
    dependencies: {
      vue: "^3.2.47",
    },
    devDependencies: {
      "vue-template-compiler": "^2.7.16",
    },
  });

  templateAPI.protocolGenerate({
    [templateToBuildToolProtocol.ADD_CONFIG]: {
      params,
      priority: 1,
    },
  })
};
export default templateConfig