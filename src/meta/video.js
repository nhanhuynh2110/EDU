import { VIDEOLINK as LINK } from '../helper/link'
import { formatDate } from '../helper/utility'

let PAGE_HEADER = { title: 'Video', link: LINK.ADD }

let TABLE_HEADERS = ['STT', 'Ngày Tạo', 'Chỉnh Sửa', 'Thao Tác']
let TABLE_COLUMNS = [
  'index',
  (field) => field['create_date'] ? formatDate(field['create_date']) : '',
  (field) => field['update_date'] ? formatDate(field['update_date']) : '',
  null
]

export default {
  PAGE_HEADER,
  TABLE_HEADERS,
  TABLE_COLUMNS
}
