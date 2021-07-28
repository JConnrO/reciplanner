module.exports = {
    format_url: url => {
        return url
            .replace('watch?v=', 'embed/')
    },
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
          date
        ).getFullYear()}`;
      },
};