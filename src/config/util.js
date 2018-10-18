export function DateToZhaoPinJi(date) {
  let time = new Date(date)
  let result = ''
  let year = time.getFullYear()
  let month = time.getMonth()
  if(month > 0 && month < 7) {
    result = year + '春招'
  } else {
    year++
    result = year + '秋招'
  }

  return result
}

export function ZhaoPinJiToDate(zhaopinji) {
  console.log(zhaopinji)
  let result = {}
  let year = parseInt(zhaopinji)
  let ji = zhaopinji.slice(4)
  if(ji == '秋招') {
    result.end = year + '-01-31'
    year--
    result.start = year + '-08-01'
  } else {
    result.start = year + '-02-01'
    result.end = year + '-07-31'
  }
  return result
}
