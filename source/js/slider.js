//range input

const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    range: {
        'min': 0,
        'max': 1100
    }
});

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const inputs = [input1, input2]


slider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle])
})

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;
  slider.noUiSlider.set(arr)
};

inputs.forEach((el, index) => {
  el.addEventListener('change', e => {
    setRangeSlider(index, e.currentTarget.value);
  })
})
