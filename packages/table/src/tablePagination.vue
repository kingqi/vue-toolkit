<template>
  <div :class="['page-wrap', customClassName]">
    <el-pagination
      :current-page="page.currentPage"
      :page-size="page.size"
      :total="page.total"
      :page-sizes="_pageConfig.pageSizes"
      :layout="_pageConfig.layout"
      v-bind="elAttrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <div class="page-button">
      <el-button
        size="mini"
        type="primary"
      >
        跳转
      </el-button>
    </div>
  </div>
</template>

<script>
import { elPageAttrs } from './config'

export default {
  props: {
    page: {
      type: Object,
      default: () => ({
        currentPage: 1,
        size: 3,
        total: 0
      })
    },
    pageConfig: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    _pageConfig() {
      return Object.assign(
        {
          pageSizes: [10, 20, 30, 50, 100],
          layout: 'total,sizes,prev,pager,next,jumper,->'
        },
        this.pageConfig
      )
    },
    customClassName() {
      return this._pageConfig.customClassName || ''
    },
    elAttrs() {
      const copy = {}
      for (const key in this._pageConfig) {
        if (elPageAttrs.includes(key)) {
          copy[key] = this._pageConfig[key]
        }
      }
      return copy
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('current-change', val)
    },
    handleSizeChange(val) {
      this.$emit('size-change', val)
    }
  }
}
</script>

<style scoped>
.page-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 12px;
}
.page-button {
  margin-left: 12px;
}
</style>
