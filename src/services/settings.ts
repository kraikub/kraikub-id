import axios from "axios";

class SettingService {
  changeSettings = async (newState: boolean, settingKey: string) => {
    const keys = settingKey.split(".")
    if (keys.length < 2) {
      throw new Error("Invalid setting keys")
    }
    const { data, status } = await axios.put("/api/setting", {
      key: settingKey,
      value: newState,
    })
  }

  changeTfa = async (newState: boolean, settingKey: string) => {
    const { data, status } = await axios.put("/api/tfa-set", {
      value: newState,
    })
  } 
}

export const settingService = new SettingService()