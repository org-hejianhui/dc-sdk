/*
 * @Author: Caven
 * @Date: 2020-02-11 21:08:01
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-11 17:34:37
 */
import Widget from './Widget'

class Attribution extends Widget {
  constructor() {
    super()
    this._wapper = DC.DomUtil.create('div', 'dc-attribution')
    this._wapper.style.cssText = `
      position: absolute;
      left: 2px;
      bottom: 2px;
      font-size: 14px;
      color: rgb(255, 255, 255);
      background: rgba(0,0,0,0.6);
      padding: 2px 5px;
      border-radius: 2px;
      user-select: none;
    `
    this._config = undefined
    this.type = DC.WidgetType.ATTRIBUTION
  }

  _installHook() {
    let span = DC.DomUtil.create('span', '', this._wapper)
    span.innerHTML = '数字视觉'
    span.style.cssText = `margin-right:5px;`
    let a = DC.DomUtil.create('a', '', this._wapper)
    a.innerHTML = 'Digital Visual'
    a.href = 'javascirpt:void(0)'
    a.onclick = () => {
      window.open('http://dv.cavencj.cn')
    }
    a.style.cssText = `color:#0078A8;`
  }
}

DC.WidgetType.ATTRIBUTION = 'attribution'

export default Attribution
