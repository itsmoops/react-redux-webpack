const common = {
    buffer: '10px',
    bufferTop: '10px',
    bufferBottom: '10px',
    borderRadius: '6px',
    navBarHeight: '60px',
    screen: {
        large: '@media screen and (min-width: 1024px)',
        medium: '@media screen and (max-width: 1023px)',
        small: '@media screen and (max-width: 768px)',
        xSmall: '@media screen and (max-width: 480px)'
    },
    disabled: `cursor: initial;
                filter: alpha(opacity=65); opacity: 0.65;
                outline: none;
                border: none;`,
    alignLeft: 'text-align: left;',
    alignCenter: 'text-align: center;',
    alignRight: 'text-align: right;'
}

export default common
