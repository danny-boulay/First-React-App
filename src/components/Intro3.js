function Intro3() {
    return (
        <div className="blog-post-intro">
            <h2>What are Ternary operators?</h2>
            <div>
                <p>Consider the following example...</p>
                <pre className="code">
                    <code>
{`let name = 'Bob';
if (name == 'Bob') {
    console.log('Hello, Bob');
} else {
    console.log('Hello, Friend');
}`}
                    </code>
                </pre>
                <p>The code above can be written like this using Ternary operator...</p>
                <pre className="code">
                    <code>
{`let name = 'Bob';
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default Intro3;