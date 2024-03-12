//**Features:**

//1. Image upload functionality for adding photos to the frame.
//2. Customizable frame color selection to match user preferences.
//3. Dynamic frame generation on a canvas element.
//4. Option to download the framed image as a PNG file.

//**Libraries and Frameworks:**

//The project does not rely on external libraries or frameworks, leveraging native HTML, CSS, and JavaScript to achieve its functionality. However, potential enhancements could involve integrating libraries for additional image processing or UI enhancements.


//**Usefulness:**

//This project provides a valuable tool for a wide range of users, offering a simple and accessible way to enhance images with customizable frames. Its ease of use and versatility make it beneficial for both personal and professional purposes, contributing to improved visual content creation and presentation across various digital platforms.

function generateFrame() {
        var uploadInput = document.getElementById('upload');
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var frameColor = document.getElementById('frameColor').value;

        var file = uploadInput.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var image = new Image();
            image.onload = function() {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
                drawFrame(ctx, canvas.width, canvas.height, frameColor);
            }
            image.src = e.target.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    function drawFrame(ctx, width, height, frameColor) {
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 20;
        ctx.strokeRect(0, 0, width, height);
    }

    function downloadImage() {
        var canvas = document.getElementById('canvas');
        var link = document.createElement('a');
        link.download = 'framed_photo.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }