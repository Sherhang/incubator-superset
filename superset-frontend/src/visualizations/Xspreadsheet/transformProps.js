export default function transformProps(chartProps) {
    const { width, height, queryData, formData } = chartProps;
    // formData 前端页面的数据
    // queryData  后端返回的数据
    return {
      data: queryData.data,
      width,
      height,
      formData};
  }