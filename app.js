'use strict'
const dropdownArrow = document.querySelectorAll('.arrow-icon');
const dropdownText = document.querySelectorAll('.dropdown-text')
const dropdownLabel = document.querySelectorAll('.dropdown-label')

for (let i = 0; i < dropdownArrow.length; i++) {
    dropdownArrow[i].addEventListener('click', function () {
        //Display hidden text
        if (dropdownText[i].classList.contains('hidden-dropdown')) {
            dropdownText[i].classList.remove('hidden-dropdown')
        } else {
            dropdownText[i].classList.add('hidden-dropdown')
        }

        //Rotate image
        if (!dropdownArrow[i].classList.contains('dropdown-arrow')) {
            dropdownArrow[i].classList.add('dropdown-arrow')
        } else {
            dropdownArrow[i].classList.remove('dropdown-arrow')
        }

        //Make label text bold
        if (!dropdownLabel[i].classList.contains('bold-label')) {
            dropdownLabel[i].classList.add('bold-label')
        } else {
            dropdownLabel[i].classList.remove('bold-label')
        }
    }

    )
}

