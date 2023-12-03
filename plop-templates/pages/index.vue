<template>
  <BasicTable @register="registerTable">
    <template #toolbar>
      <a-button type="primary" @click="exportData"> 数据导出 </a-button>
    </template>
  </BasicTable>
</template>

<script lang="ts" setup>
  import { reactive, ref, unref, watch, nextTick } from 'vue';
  import { BasicForm, FormSchema } from '/@/components/Form';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getSchemas, getColumns } from './data.ts';
  import { getList } from '/@/api/{{module}}/{{name}}Api.ts';

  const [registerTable, { reload, getForm }] = useTable({
    api: getList,
    formConfig: {
      labelWidth: 120,
      schemas: getSchemas(),
    },
    columns: getColumns(),
    showIndexColumn: false,
    useSearchForm: true,
    showTableSetting: true,
    tableSetting: {
      // 是否显示刷新按钮
      redo: true,
      size: false,
      // 是否显示字段调整按钮
      setting: false,
      // 是否显示全屏按钮
      fullScreen: false,
    },
    canResize: true,
  });

  function exportData() {
    // 
  }
 </script >
