const TASK_STATUS = {
  0: '待审核',
  1: '审核通过',
  2: '审核拒绝',
  3: '上线完成',
  4: '上线失败'
}
export default function () {
  const self = this
  return [
    {
      prop: 'name',
      label: '上线单',
      width: 180
    },
    {
      prop: 'project_name',
      label: '项目',
      width: 180
    },
    {
      prop: 'name',
      label: '用户名',
      width: 120
    },
    {
      label: '版本',
      width: 120,
      render (h, scope) {
        return (scope.row.project_info && scope.row.project_info.version) || ''
      }
    },
    {
      label: '环境',
      width: 120,
      render (h, scope) {
        return (scope.row.project_info && scope.row.project_info.environment_id) || ''
      }
    },
    {
      prop: 'updated_at',
      label: '更新时间',
      width: 160
    },
    {
      prop: 'status',
      label: '状态',
      width: 80,
      render (h, scope) {
        return TASK_STATUS[scope.row.status]
      }
    },
    {
      label: '操作',
      minWidth: 180,
      render (h, scope, methods) {
        return (
          <div>
            {self.renderReview({...scope.row})}
            {self.renderDeploy({...scope.row})}
            {self.renderEditTool({...scope.row})}
            {self.renderDeleteTool({...scope.row})}
          </div>
        )
      }
    }
  ]
}
