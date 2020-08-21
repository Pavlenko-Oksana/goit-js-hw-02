function formatString (string, maxLength = 40) {

    let finalString = string.split('');
  
    if (finalString.length > maxLength) {
    finalString.length = maxLength;
      return finalString.join('') + ('...');
    } else if (finalString.length <= maxLength) {
      return finalString.join('');
    }
    
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'