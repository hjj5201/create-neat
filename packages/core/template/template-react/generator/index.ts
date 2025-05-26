import { templateToBuildToolProtocol } from "../../../src/configs/protocol.js";
import TemplateAPI from "../../../src/models/TemplateAPI.js";
import pluginAngular from "../index.js";

const templateConfig = (templateAPI: TemplateAPI) => {
  const buildTool = templateAPI.generator.buildTool
  const params = pluginAngular(buildTool)
  templateAPI.extendPackage({
    dependencies: {
      react: "^18.2.0",
      "react-dom": "^18.2.0",
    },
    devDependencies: {},
  });
  templateAPI.protocolGenerate({
    [templateToBuildToolProtocol.ADD_CONFIG]: {
      params,
      priority: 1,
    },
  })
};

export default templateConfig