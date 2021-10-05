var downArrow = "../../library/assets/images/accordion/down-arrow.svg"
var upArrow = "../../library/assets/images/accordion/up-arrow.svg"

var accordions = document.querySelectorAll('.ui.accordion')
for (var i = 0;
    (accordions !== null) && (i < accordions.length); i++) {

    var categories = accordions[i].getElementsByClassName('category');
    for (var j = 0;
        (categories !== null) && (j < categories.length); j++) {

        // Add alternate gray effect
        if (j % 2 === 1) {
            categories[j].classList += ' gray'
        }

        var items = categories[j].getElementsByClassName('item')
        for (var k = 0;
            (items !== null) && (k < items.length); k++) {

            // Add dividers
            const divider = document.createElement('div')
            divider.className = 'divider'
            items[k].parentNode.insertBefore(divider, items[k].nextSibling)

            var titles = items[k].getElementsByClassName('title')
            if (titles !== null) {
                var title = titles[0]

                // Add Arrow
                const arrow = document.createElement('img')
                arrow.setAttribute('src', downArrow)
                arrow.className = 'arrow'
                title.appendChild(arrow)

                // Manage click
                title.addEventListener('click', function(e) {
                    e.stopPropagation()
                    e.preventDefault()

                    if (e.target) {
                        if (e.target === arrow) {

                            const description = e.target.parentNode.nextElementSibling

                            if (description !== null) {
                                if (description.style.display === 'block') {
                                    description.style.display = 'none'
                                    arrow.setAttribute('src', downArrow)
                                } else {
                                    description.style.display = 'block'
                                    arrow.setAttribute('src', upArrow)
                                }
                            }

                        } else {
                            const description = e.target.nextElementSibling
                            const arrow = e.target.childNodes[1]

                            if (description !== null) {
                                if (description.style.display === 'block') {
                                    description.style.display = 'none'
                                    arrow.setAttribute('src', downArrow)
                                } else {
                                    description.style.display = 'block'
                                    arrow.setAttribute('src', upArrow)
                                }
                            }
                        }
                    }
                })
            }

        }

    }

}


var imageAccordions = document.querySelectorAll('.ui.image-accordion')
for (var i = 0;
    (imageAccordions !== null) && (i < imageAccordions.length); i++) {

    const items = imageAccordions[i].getElementsByClassName('item')
    for (var j = 0;
        (items !== null) && (j < items.length); j++) {

        const contents = items[j].getElementsByClassName('content')
        if (contents !== null) {
            const content = contents[0]

            const titles = content.getElementsByClassName('title')
            if (titles !== null) {
                const title = titles[0]

                // Add Arrow
                const arrow = document.createElement('img')
                arrow.setAttribute('src', downArrow)
                arrow.className = 'arrow'
                title.appendChild(arrow)

                // Add divider
                const divider = document.createElement('div')
                divider.className = 'divider'
                title.parentNode.insertBefore(divider, title.nextSibling)

                // Manage click
                title.addEventListener('click', function(e) {
                    e.stopPropagation()
                    e.preventDefault()

                    if (e.target) {

                        if (e.target === arrow) {

                            const divider = e.target.parentNode.nextElementSibling
                            const description = divider.nextElementSibling

                            if (description !== null) {
                                if (description.style.display === 'block') {
                                    divider.style.display = 'none'
                                    description.style.display = 'none'
                                    arrow.setAttribute('src', downArrow)
                                } else {
                                    divider.style.display = 'block'
                                    description.style.display = 'block'
                                    arrow.setAttribute('src', upArrow)
                                }
                            }

                        } else {
                            const divider = e.target.nextElementSibling
                            const description = divider.nextElementSibling
                            const arrow = e.target.childNodes[1]

                            if (description !== null) {
                                if (description.style.display === 'block') {
                                    divider.style.display = 'none'
                                    description.style.display = 'none'
                                    arrow.setAttribute('src', downArrow)
                                } else {
                                    divider.style.display = 'block'
                                    description.style.display = 'block'
                                    arrow.setAttribute('src', upArrow)
                                }
                            }
                        }

                    }
                })
            }
        }

    }

}