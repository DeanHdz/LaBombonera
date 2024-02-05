function copyText() {
    var copyInput = document.getElementById('copyText');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);

    try {
      // Use the Clipboard API to copy the text
      navigator.clipboard.writeText(copyInput.value)
        .then(() => {
          console.log('Text successfully copied to clipboard');
        })
        .catch((err) => {
          console.error('Unable to copy text to clipboard', err);
        });
    } catch (err) {
      console.error('Clipboard API not supported', err);
    }
  }