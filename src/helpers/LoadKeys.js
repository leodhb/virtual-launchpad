export function LoadKeys(launchpad) {
    document.onreadystatechange = () => {
        let acceptedKeys = {};

        if (document.readyState === 'complete') {
            launchpad.forEach(function (sample) {
                acceptedKeys[sample.keycode] = () => {
                  document.getElementById(sample.uuid).click();
                };
            });
        }

        window.addEventListener(
            "keydown",
            (event) => {
              console.log(acceptedKeys);
              let playFunction = acceptedKeys[event.code];
          
              if (playFunction) {
                playFunction();
                
              }
            },
            false
        );

        
        function updateSlider(element) {
          if (element) {
            let parent = element.parentElement,
              lastValue = parent.getAttribute('data-slider-value');

            if (lastValue === element.value) {
              return; // No value change, no need to update then
            }

            parent.setAttribute('data-slider-value', element.value);
            let $thumb = parent.querySelector('.range-slider__thumb'),
              $bar = parent.querySelector('.range-slider__bar'),
              pct = element.value * ((parent.clientHeight - $thumb.clientHeight) / parent.clientHeight) *100;

            $thumb.style.bottom = `${pct}%`;
            $bar.style.height = `calc(${pct}% + ${$thumb.clientHeight/2}px)`;
            //$thumb.textContent = `${element.value * 100}%`;
          }
        }

        function initAndSetupTheSliders() {
          const inputs = [].slice.call(document.querySelectorAll('.range-slider input'));
          inputs.forEach(input => input.setAttribute('value', '.5'));
          inputs.forEach(input => updateSlider(input));
          // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
          inputs.forEach(input => input.addEventListener('input', element => updateSlider(input)));
          inputs.forEach(input => input.addEventListener('change', element => updateSlider(input)));
        }

        initAndSetupTheSliders()



    };
}