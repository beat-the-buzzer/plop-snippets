import { h } from 'vue'
import { BasicColumn, FormSchema } from '/@/components/Table/index'
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export function getSchemas(): FormSchema[] {
  return [
    {
      field: 'filename',
      component: 'Input',
      label: t('component.excel.fileName'),
      rules: [{ required: true }],
    },
    {
      field: 'bookType',
      component: 'Select',
      label: t('component.excel.fileType'),
      defaultValue: 'xlsx',
      rules: [{ required: true }],
      componentProps: {
        options: [
          {
            label: 'xlsx',
            value: 'xlsx',
            key: 'xlsx',
          },
          {
            label: 'html',
            value: 'html',
            key: 'html',
          },
          {
            label: 'csv',
            value: 'csv',
            key: 'csv',
          },
          {
            label: 'txt',
            value: 'txt',
            key: 'txt',
          },
        ],
      },
    },
  ];
}

export function getColumns(): BasicColumn[] {
  return [
    {
      dataIndex: 'time',
      title: t('sys.errorLog.tableColumnDate'),
      width: 160,
    },
    {
      dataIndex: 'file',
      title: t('sys.errorLog.tableColumnFile'),
      width: 200,
    },
    {
      dataIndex: 'name',
      title: 'Name',
      width: 200,
    },
    {
      dataIndex: 'message',
      title: t('sys.errorLog.tableColumnMsg'),
      width: 300,
    },
    {
      dataIndex: 'stack',
      title: t('sys.errorLog.tableColumnStackMsg'),
    },
  ];
}