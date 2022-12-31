const showStyles = (trigger, stylesClass) => {
    const btn = document.querySelector(trigger);
    const styles = document.querySelectorAll(stylesClass);

    btn.addEventListener('click', () => {
        styles.forEach((card) => {
            card.classList = '';
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    });
};

export default showStyles;
