import Mock from "mockjs";
import user from "./user";

const mockConfigList = [...user];

// 配置响应时间200~600毫秒
Mock.setup({
  timeout: "200-600",
});

mockConfigList.forEach(({ path, method, data }) => {
  Mock.mock(path, method, data);
});
