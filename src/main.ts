const COMMENT = '#simple-box'
const ACTION_BUTTONS_SELECTOR = '#toolbar' 

function main() {
    const observer = new MutationObserver(() => {
        Array.from(document.querySelectorAll(COMMENT))
            .forEach(el => el.remove())
        const comments = document.querySelectorAll(ACTION_BUTTONS_SELECTOR)
        Array.from(comments)
            .forEach(el => el.remove())
    });
    const target = document.body
    observer.observe(target, {
        childList: true,
        subtree: true
    })
}

main()