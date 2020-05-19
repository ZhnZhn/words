
const SettingSlice = {
  isAutoSaveOnAdd: true,

  onCheckAutoSave(){
    this.isAutoSaveOnAdd = true
  },
  onUncheckAutoSave(){
    this.isAutoSaveOnAdd = false
  }
}

export default SettingSlice
