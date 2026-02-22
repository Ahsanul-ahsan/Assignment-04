let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCard = document.getElementById('allcard');
const mainContanier = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');


function calculateCount() {
    total.innerText = allCard.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectedList.length

}
calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-700', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-700', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-700', 'text-white');

    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

    const selected = document.getElementById(id);
    currentStatus = id

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-blue-700', 'text-white')

    if (id == 'interview-filter-btn') {
        allCard.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCard.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCard.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderRejected();
    }
}

mainContanier.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview')) {
        const parenNode = event.target.parentNode.parentNode
        const cardName = parenNode.querySelector('.cardName').innerText
        const designation = parenNode.querySelector('.designation').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const notApplied = parenNode.querySelector('.notApplied').innerText
        const details = parenNode.querySelector('.details').innerText
        parenNode.querySelector('.notApplied').innerText = 'interview'
        parenNode.querySelector('.notApplied').className = 'bg-green-500 rounded-sm w-[100px] h-[35px] text-white text-[14px] font-bold'


        const cardInfo = {
            cardName,
            designation,
            salary,
            notApplied: 'interview',
            details
        }

        const cardNameExist = interviewList.find(item => item.cardName == cardInfo.cardName)

        if (!cardNameExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.cardName != cardInfo.cardName)
        calculateCount();
        renderInterview();
    }
    else if (event.target.classList.contains('rejected')) {
        const parenNode = event.target.parentNode.parentNode
        const cardName = parenNode.querySelector('.cardName').innerText
        const designation = parenNode.querySelector('.designation').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const notApplied = parenNode.querySelector('.notApplied').innerText
        const details = parenNode.querySelector('.details').innerText
        parenNode.querySelector('.notApplied').innerText = 'Rejected'
        parenNode.querySelector('.notApplied').className = 'bg-red-500 rounded-sm w-[100px] h-[35px] text-white text-[14px] font-bold'


        const cardInfo = {
            cardName,
            designation,
            salary,
            notApplied: 'Rejected',
            details
        }

        const cardNameExist = rejectedList.find(item => item.cardName == cardInfo.cardName)

        if (!cardNameExist) {
            rejectedList.push(cardInfo)
        }
        interviewList = interviewList.filter(item => item.cardName != cardInfo.cardName)
        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }

        calculateCount();

    }

})

function renderInterview() {
    filterSection.innerHTML = ''
    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div');
        div.className = 'flex justify-between  bg-[#FFFFFF] rounded-[5px] '
        div.innerHTML = `
        <div class="space-y-4 p-5 rounded-sm">
                    <div>
                        <p class="cardName text-[#002C5C] text-[14px] font-bold">${interview.cardName}</p>
                        <p class="designation text-[#323B49] text-[12px]">${interview.designation}</p>
                    </div>
                    <div>
                        <p class="salary text-[#323B49] text-[12px]">${interview.salary}</p>
                    </div>
                    <div>
                        <button
                            class="notApplied bg-[#EEF4FF] rounded-sm w-[100px] h-[35px] text-[#002C5C] text-[14px]">${interview.notApplied}</button>
                        <p class="details text-[#323B49] text-[12px]">${interview.details}</p>
                    </div>
                    <div>
                        <button
                            class="interview border-1 border-green-500 w-[82px] h-[30px] text-[green] rounded-[5px] text-[14px]">interview</button>
                        <button
                            class="rejected border-1 border-red-500 w-[82px] h-[30px] text-[red] rounded-[5px] text-[14px]">Rejected</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button class="delete-btn w-[30px] h-[30px] rounded-[50%] bg-[#FFFFFF] py-5 pr-8"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
        
        `
        filterSection.appendChild(div)

    }
}
function renderRejected() {
    filterSection.innerHTML = ''
    for (let reject of rejectedList) {
        console.log(reject)
        let div = document.createElement('div');
        div.className = 'flex justify-between  bg-[#FFFFFF] rounded-[5px] '
        div.innerHTML = `
        <div class="space-y-4 p-5 rounded-sm">
                    <div>
                        <p class="cardName text-[#002C5C] text-[14px] font-bold">${reject.cardName}</p>
                        <p class="designation text-[#323B49] text-[12px]">${reject.designation}</p>
                    </div>
                    <div>
                        <p class="salary text-[#323B49] text-[12px]">${reject.salary}</p>
                    </div>
                    <div>
                        <button
                            class="notApplied bg-[#EEF4FF] rounded-sm w-[100px] h-[35px] text-[#002C5C] text-[14px]">${reject.notApplied}</button>
                        <p class="details text-[#323B49] text-[12px]">${reject.details}</p>
                    </div>
                    <div>
                        <button
                            class="interview border-1 border-green-500 w-[82px] h-[30px] text-[green] rounded-[5px] text-[14px]">interview</button>
                        <button
                            class="rejected border-1 border-red-500 w-[82px] h-[30px] text-[red] rounded-[5px] text-[14px]">Rejected</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button class="delete-btn w-[30px] h-[30px] rounded-[50%] bg-[#FFFFFF] py-5 pr-8"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
        
        `
        filterSection.appendChild(div)

    }
}