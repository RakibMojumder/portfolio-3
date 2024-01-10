const handleNavigate = (e) => {
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const ref = e.currentTarget.href;
    const targetId = ref.replace(/.*#/, "");

    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    setTimeout(() => {
        elem?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, 1);
};

export default handleNavigate;