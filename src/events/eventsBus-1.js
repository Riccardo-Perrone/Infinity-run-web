const eventsBus = {
  on(event, callback) {
    document.addEventListener(event,(e) => {
        e.stopImmediatePropagation();
        callback(e.detail);
      },
      false
    );
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
    callback(event);
  },
};

export default eventsBus;
