import glSliderList from '../json/glSlider'

const glSlider = {
  url: /\/api\/lygl\/glSlider\/glSlider_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      glSliderList
    }
  }
}

export default glSlider
