import cn from 'classnames';

export const stylesWrapper =
  styles =>
  (...args) =>
    cn(...args)
      .split(' ')
      .reduce((acc, styleName) => {
        if (typeof styles[styleName] !== 'undefined') {
          acc.push(styles[styleName]);
        }

        return acc;
      }, []);
