const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');
const figlet = require('figlet');
const clc = require("cli-color");
const moment = require('moment');

dotenv.config()

// function to extract link reff
const extractReflink = () => {
    const link = process.env.REFER_LINK
    
    if (link.includes("https://t.me/fintopio/wallet?startapp=reflink-reflink_")) {
        newcode = link.split("reflink_")[1]
        newcode = newcode.split("-")[0]
    } else {
        newcode = link
    }
        
    return String(newcode)
}
    

// async func to get token
const getTelegram = async (query) => {
    const url = `https://fintopio-tg.fintopio.com/api/auth/telegram?${query}`

    const headers = {
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

	while (true) {
        try {
            const response = await axios.get(url, {
                headers: headers
            });
    
            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            console.error(`Error to getTelegram, ${e}`);
            continue
        }
    }
};

// async func to get profile
const getProfile = async (token) => {
    const url = `https://fintopio-tg.fintopio.com/api/fast/init`

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.get(url, {
                headers: headers
            });

            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            console.error(`Error to getProfile, ${e}`)
            continue
        }
    }
}

// async func to get hold
const getHold = async (token) => {
    const url = `https://fintopio-tg.fintopio.com/api/hold/fast/init`

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.get(url, {
                headers: headers
            });

            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            console.error(`Error to getHold, ${e}`)
            continue
        }
    }
}

// async func to daily checkin
const dailyCheckin = async (token) => {
    const url = `https://fintopio-tg.fintopio.com/api/daily-checkins`
    
    const payload = {}

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'content-length': '0', 
        'origin': 'https://fintopio-tg.fintopio.com', 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.post(url, payload, {
                headers: headers
            });

            if (response.status == 201) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            console.error(`Error to dailyCheckin, ${e}`)
            continue
        }
    }
}

// async func to tap tap
const tapTap = async (token, diamondNumber) => {
    const refcode = extractReflink()
    
    const url = `https://fintopio-tg.fintopio.com/api/clicker/diamond/complete`
    
    const payload = JSON.stringify({
        "diamondNumber": `${diamondNumber}`
    })
    
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json',
        'origin': 'https://fintopio-tg.fintopio.com',
        'priority': 'u=1, i',
        'referer': `https://fintopio-tg.fintopio.com/hold?reflink=${refcode}`,
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.post(url, payload, {
                headers: headers
            })

            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            if (e.status == 400) {
                break;
            } else {
                console.error(`Error to tapTap, ${e.status}`)
                continue
            }
        }
    }
}

// async func to get farm
const getFarm = async (token) => {
    const url = "https://fintopio-tg.fintopio.com/api/farming/state"

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.get(url, {
                headers: headers
            });

            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            console.error(`Error to getFarm, ${e}`)
            continue
        }
    }
}

// async func to start farm
const startFarm = async (token) => {
    const url = "https://fintopio-tg.fintopio.com/api/farming/farm"

    const payload = {}

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'content-length': '0', 
        'origin': 'https://fintopio-tg.fintopio.com', 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.post(url, payload, {
                headers: headers
            })

            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            if (e.status == 400) {
                break;
            } else {
                console.error(`Error to startFarm, ${e.status}`)
                continue
            }
        }
    }
}

// async func to claim farm
const claimFarm = async (token) => {
    const url = "https://fintopio-tg.fintopio.com/api/farming/claim"

    const payload = {}

    const headers = {
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'content-length': '0', 
        'origin': 'https://fintopio-tg.fintopio.com', 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold?tasks=true', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.post(url, payload, {
                headers: headers
            })

            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            if (e.status == 400) {
                break;
            } else {
                console.error(`Error to claimFarm, ${e.status}`)
                continue
            }
        }
    }
}

// async func to get task
const getTasks = async (token) => {
    const url = "https://fintopio-tg.fintopio.com/api/hold/tasks"

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.get(url, {
                headers: headers
            });

            if (response.status == 200) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            console.error(`Error to getTasks, ${e}`)
            continue
        }
    }
}

// async func to start task
const startTask = async (token, taskid) => {
    const url = `https://fintopio-tg.fintopio.com/api/hold/tasks/${taskid}/start`

    const payload = {}

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'content-length': '0', 
        'origin': 'https://fintopio-tg.fintopio.com', 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while (true) {
        try {
            const response = await axios.post(url, payload, {
                headers: headers
            })

            if (response.status == 201) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            if (e.status == 400) {
                break;
            } else {
                console.error(`Error to startTask, ${e.status}`)
                continue
            }
        }
    }
}

// async func to claim task
const claimTask = async (token, taskid) => {
    const url = `https://fintopio-tg.fintopio.com/api/hold/tasks/${taskid}/claim`

    const payload = {}

    const headers = { 
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'content-length': '0', 
        'origin': 'https://fintopio-tg.fintopio.com', 
        'priority': 'u=1, i', 
        'referer': 'https://fintopio-tg.fintopio.com/hold', 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
      }

    while (true) {
        try {
            const response = await axios.post(url, payload, {
                headers: headers
            })

            if (response.status == 201) {
                // console.log(response.data)
                return response.data
            } else {
                continue
            }
        } catch (e) {
            if (e.status == 400) {
                break;
            } else {
                console.error(`Error to claimTask, ${e.status}`)
                continue
            }
        }
    }
}

// async func to activation ref
const activateRef = async (token) => {
    const refcode = extractReflink()

    const url = "https://fintopio-tg.fintopio.com/api/referrals/activate"

    const payload = JSON.stringify({
        "code": `${refcode}`
    });

    const headers = {
        'accept': 'application/json, text/plain, */*', 
        'accept-language': 'en-US,en;q=0.9', 
        'authorization': `Bearer ${token}`, 
        'content-type': 'application/json', 
        'origin': 'https://fintopio-tg.fintopio.com', 
        'priority': 'u=1, i', 
        'referer': `https://fintopio-tg.fintopio.com/hold?reflink=${refcode}`, 
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }   
    while (true) {
        try {
            const response = await axios.post(url, payload, {
                headers: headers
            })

            if (response.status == 200) {
                // console.log(response.data)
                return
            } else {
                continue
            }
        } catch (e) {
            if (e.status == 400) {
                break;
            } else {
                console.error(`Error to activateRef, ${e.status}`)
                continue
            }
        }
    }
}

// async func to countdown
const timeCount = async (finish, nanti, waktu) => {
    for (let i = waktu; i >= 0; i--) {
        // inisiasi menit dan second
        let minutes = Math.floor(waktu/60)
        let seconds = waktu % 60;

        // jika menit dan second < 2 digit
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // BOOMM tampilkan ******
        process.stdout.write(`Execution time : ${clc.yellow(finish.toFixed(2))} seconds | Refresh token : ${clc.yellow(moment.unix(nanti).format("YYYY-MM-DD HH:mm:ss"))} | Refresh after : ${clc.yellow(`${minutes}:${seconds}`)}`);
        
        // increament - 1
        waktu = waktu-1;

        // blocking delay untuk satu detik
        await new Promise(resolve => setTimeout(resolve, 1000))

        // clear last console log
        if (waktu >= 0) {
            process.stdout.clearLine();
            process.stdout.cursorTo(0); 
        }
    }
}

// async func to sendmessage to telegram
const sendMessage = async (total) => {
    const telegram_token = String(process.env.TELEGRAM_TOKEN)
    const telegram_chatid = String(process.env.TELEGRAM_CHATID)
    const message = `Total fintopio : ${total}`
    
    if (telegram_token != "" && telegram_chatid != "") {
        const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${telegram_chatid}&text=${message}`

        while (true) {
            try {
                const response = await axios.get(url);

                if (response.status == 200) {
                    // console.log(response.data)
                    return response.data
                } else {
                    continue
                }
            } catch (err) {
                console.log(`Error to sendMessage, ${err}`)
                continue
            }
        }
    } else {
        return
    }
}

// async func to create token
const runCreateToken = async () => {
    try {
        // buat query.txt
        const data = fs.readFileSync('query.txt', 'utf-8');
        const querys = data.split('\n')

        // get token ***GATHER BOOMMM!!!!!
        const tokens = []
        await Promise.all(querys.map(async (query) => {
            await getTelegram(query)
            .then((token) => tokens.push(token['token']))
            .catch((err) => console.error(err))
        }))
        
        // buat file tokens.txt
        fs.writeFileSync('tokens.txt', "")
        
        // read tokens.txt
        const token = fs.readFileSync('tokens.txt', 'utf-8');

        // append token to token.txt
        for (const token of tokens) {
            // console.log(token)
            fs.appendFileSync('tokens.txt', `${token}\n`)
        }
        return true
    } catch (e) {
        // jika query.txt not exist
        if (e.code == 'ENOENT') {
            console.log('Fill the query.txt first!');
            fs.writeFileSync('query.txt', "query1\nquery2\netc...")
            return false
        } else {
            throw e
        }
    }
}

(async () => {
    // const query = ""
    
    // clear cli
    console.clear()

    console.log("Create token started")
    const restoken = await runCreateToken()
    if (restoken == true) {
        console.log("Create token success!")
        
        let sekarang = Math.trunc(Date.now()/1000)
        let nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)

        while (sekarang < nanti) {
            console.log(figlet.textSync('fintopio botjs', {font: "Ogre"}), '\n')
            console.log("Auto claim task :", process.env.AUTO_TASK == "true" ? clc.green('On') : "Off")
            console.log("")
            let start = Date.now()/1000

            // open tokens.txt
            const data = fs.readFileSync('tokens.txt', 'utf-8')
            const tokens = data.split('\n')

            // run all ***GATHER BOOMMM!!!!!
            const runall = await Promise.all(tokens.map(async (token) => {
                if (token != "") {
                    // user
                    const profile = await getProfile(token)
                    const userid = profile['profile']['telegramId']

                    // hold 
                    const hold = await getHold(token)
                    const isdailyclaimed = hold['referralData']['isDailyRewardClaimed']
                    const balance = hold['referralData']['balance']
                    const isavailable = hold['clickerDiamondState']['state']
                    const diamondNumber = hold['clickerDiamondState']['diamondNumber']
                    
                    // activate ref
                    await activateRef(token)
                    .catch((err) => console.error(err))

                    // claim daily
                    let isdailyclaimed_status = "-"
                    if (isdailyclaimed != true) {
                        isdailyclaimed_status = clc.yellow('Available to claim')
                        await dailyCheckin(token)
                        .catch((err) => console.error(err))
                    } else {
                        isdailyclaimed_status = clc.green("Done")
                    }

                    // tap tap
                    let taptap_status = "-"
                    if (isavailable == "available") {
                        taptap_status = clc.green('Available')
                        await tapTap(token, diamondNumber)
                        .catch((err) => console.error(err))
                    } else {
                        taptap_status = clc.yellow('Unavailable')
                    }

                    // farming
                    const farm_state = await getFarm(token)
                    let farm_status = "-"
                    if (farm_state['state'] == 'idling') {
                        farm_status = clc.green('Available')
                        await startFarm(token)
                        .catch((err) => console.error(err))
                    } else if (farm_state['state'] == 'farming') {
                        farm_status = clc.yellow(`Farming`)
                    } else {
                        farm_status = clc.green(`Claim`)
                        await claimFarm(token)
                        .catch((err) => console.error(err))
                    }
                    
                    // print
                    console.log(`[${userid}] | Daily check-in : ${isdailyclaimed_status} | Balance : ${clc.green(Math.trunc(balance))} | Hold status : ${taptap_status} | Farm status : ${farm_status}`)
                    
                    // task
                    if (process.env.AUTO_TASK == "true") {
                        task_list = await getTasks(token)

                        for (i of task_list['tasks']) {
                            const taskid = i['id']
                            const istaskavailable = i['status']
                            if (istaskavailable == "available") {
                                await startTask(token, taskid)
                            } else if (istaskavailable == "verified") {
                                await claimTask(token, taskid)
                            }
                        }
                    }
                    return Math.trunc(balance)
                }
            }))

            // console.log(runall)

            let totalallacc = 0
            for (let i=0; i < runall.length; i++) {
                if (runall[i] != undefined) {
                    totalallacc = totalallacc + runall[i]
                }
            }
            
            // delay before next running
            console.log('')
            console.log('Total balance :', clc.green(totalallacc.toLocaleString('en-US')))

            let finish = (Date.now()/1000)-start

            // printed and blocking
            await timeCount(finish, nanti, Number(process.env.REFRESH_CLAIM)) // blocking/pause for REFRESH_CLAIM seconds

            sekarang = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_CLAIM)
            if (sekarang >= nanti) {
                console.log("\n")
                console.log("Refresh tokens started!")
                const restoken = await runCreateToken()
                if (restoken == true) {
                    console.log("Refresh tokens success!")
                    await new Promise(resolve => setTimeout(resolve, 2000)) // blocking/pause for 10 seconds
                    await sendMessage(totalallacc.toLocaleString('en-US'))
                    nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)
                }
            }
                
            console.clear()
        }
    } else {
        return
    }        
})()