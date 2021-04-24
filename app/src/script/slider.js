class Slider {
  constructor(config) {
    this.slider = document.querySelector(config.el)
    this.sliderLine = this.slider.querySelector('.slider__line')
    this.slides = this.sliderLine.children
    this.sliderControls = this.slider.querySelector('.slider__controls')
    this.icon = this.sliderControls.children

    this.width = this.slider.clientWidth
    this.height = this.slider.clientHeight

    this.sliderLine.style = `position: relative;
                             height: ${this.height}px;
                            `

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style = `position: absolute;
                              height: ${this.height}px;
                              width: ${this.width}px;
                              `
    }
    this.icon = addEventListener('click', ()=>{
        this.icon.style = `color: #4D3592;
                              transition: 0.5s color;`
    })
  }
}

const slider = new Slider({
  el: '.slider'
})