const formatDate = (dateString, format) => {
    const date = new Date(dateString);

    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    switch (format) {
      case 'MM/DD/YYYY':
        return date.toLocaleDateString('en-US', {
          ...options,
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        }).split(', ')[0];
      case 'DD/MM/YYYY':
        return date.toLocaleDateString('en-GB', {
          ...options,
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).split(', ')[0];
      case 'YYYY/MM/DD':
        return date.toLocaleDateString('zh-Hans-CN', {
          ...options,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).split(', ')[0];
      case 'ISO':
        return date.toISOString();
      case 'long':
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      case 'short':
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      default:
        return date.toLocaleDateString('en-US', options);
    }
  };
  
  export default formatDate