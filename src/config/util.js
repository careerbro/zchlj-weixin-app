export function DateToZhaoPinJi(date) {
  let time = new Date(date)
  let result = ''
  let year = time.getFullYear()
  let month = time.getMonth()
  if( month < 6) {
    result = year + '春招'
  } else {
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
    result.end = year + '-12-31'
    result.start = year + '-07-01'
  } else {
    result.start = year + '-01-01'
    result.end = year + '-06-30'
  }
  return result
}
