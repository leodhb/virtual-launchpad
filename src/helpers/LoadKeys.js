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
              let playFunction = acceptedKeys[event.code];
          
              if (playFunction) {
                playFunction();
                
              }
            },
            false
        );
    };
}