function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
    console.log(domElement)
    */  
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props)
    {
        if (prom === children) continue;
        domElement.setAttribute('prop',reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement)


}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to visit  googlee'
}
let mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)