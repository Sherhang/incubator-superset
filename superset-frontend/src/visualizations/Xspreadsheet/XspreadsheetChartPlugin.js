import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from './transformProps';
import thumbnail from './images/xspreadsheet.png';

const metadata = new ChartMetadata({
  name: t('X_Spreadsheet'),
  description: '',
  credits: ['https://github.com/myliang/x-spreadsheet'],
  thumbnail,
});

export default class MixLineBarChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      loadChart: () => import('./X_Spreadsheet.js'), // 前端渲染逻辑
    });
  }
}
