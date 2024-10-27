// A constant that contains the JSX for a single paragraph HTML element
const myParagraphElement = <p>Here is a paragraph element stored in a JavaScript constant and written using JSX</p>

/* A constant that contains the JSX for multiple paragraph HTML elements
 * JSX containing multiple HTML elements must be wrapped within a container element such as Div */
const multipleParagraphs = (
    <div>
        <p>This paragraph and the one below are stored in a single JavaScript constant and were rendered at the same time using a single ReactDOM.render() statement</p>
        <p>This paragraph and the one above are stored in a single JavaScript constant and were rendered at the same time using a single ReactDOM.render() statement</p>
    </div>
)

/* A function that returns an HTML paragraph element via JSX that can be reused anywhere
 * JSX is what enables us to write HTML-like syntax directly within JavaScript code
 * Please note that the "class" attribute is renamed to "className" when using JSX but has the same functionality */
function WriteParagraph() {
    return (
        <p className="MyParagraph">This is a paragraph element written with JSX and returned from a JavaScript function.</p>
    )
}

/* A function that returns a paragraph element via JSX
 * This function is the same as the one above but accepts a parameter */
function WriteParagraphWithParameter({myParagraphString}) {
    return (
        <p className="MyParagraphWithParameter">{myParagraphString}</p>
    )
}

// Use the ReactDOM to render a header HTML element
ReactDOM.render(<h1>A simple header rendered via the ReactDOM</h1>, document.getElementById("ReactTest1"))

// Use the ReactDOM to render an Unordered List HTML element with three List Items
ReactDOM.render(
    <ul><li>Bread</li><li>Cheese</li><li>Artichoke</li></ul>,
    document.getElementById("ReactTest2")
)

/* Use the ReactDOM to render multiple HTML elements at once
 * All elements must be wrapped within a container element in order to do this */
ReactDOM.render(
    <div>
        <p>This paragraph and the one below were rendered at the same time using a single ReactDOM.render() statement</p>
        <p>This paragraph and the one above were rendered at the same time using a single ReactDOM.render() statement</p>
    </div>, document.getElementById("ReactTest3"))

// Use the ReactDOM to render a single line of JSX defined in a constant
ReactDOM.render(myParagraphElement, document.getElementById("ReactTest4"))

// Use the ReactDOM to render multiple lines of JSX defined in a constant
ReactDOM.render(multipleParagraphs, document.getElementById("ReactTest5"))

// Use the ReactDOM to render JSX returned from a function
ReactDOM.render(<WriteParagraph />, document.getElementById("ReactTest6"))

// Use the ReactDOM to render JSX returned from a function that accepts a parameter
//ReactDOM.render(<WriteParagraphWithParameter myParagraphString="This is a paragraph element written with JSX and returned from a JavaScript function that accepts a parameter" />, document.getElementById("ReactTest7"))


const root = ReactDOM.createRoot(document.getElementById("ReactTest7"));
root.render(<WriteParagraphWithParameter myParagraphString="This is a paragraph element written with JSX and returned from a JavaScript function that accepts a parameter" />);