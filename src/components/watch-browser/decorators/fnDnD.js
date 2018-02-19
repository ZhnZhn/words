
const fnDnD = {
  setTransferTo: ({ event, dragId, xType }) => {
    const _data = { dragId, xType };
    Object.assign(event.dataTransfer, {
      effectAllowed: "move",
      dropEffect: "move"
    }).setData(
      "text", JSON.stringify(_data)
    )
  }
}

export default fnDnD
