$(document).ready(function(){
    //$('#myModal').modal(options)
    console.log(info);
    const gettingStudentsData = (info) => {
        let student = info.students;
        console.log(student);
        for(let i = 0; i < student.length; i++){
        let name = student[i].name;
        let image = student[i].pic;
        let skills = student[i].skills;
        console.log(name);
        console.log(image);
        console.log(skills);

        for(let i = 0; i < skills.length; i++){
            let allSkills = "";
            allSkills += skills[i];
            console.log(allSkills);
            }
        }
    }

gettingStudentsData(info);
    
    
    const template = (image,name) => {
        let div = `<div class="card">
        <div class="card-body row">
        <div class="col-12 col-md-4">
        <img class="img-responsive img-thumbnail" src=${image}" alt="">
        </div>
        <div class="name col-3 col-md-2 col-lg-2 align-items-center">
        <br>
        <br>
        <br>
        <h5 class="row title">${name}</h5>
        </div>
        <div class="skills img-thumbnail col-5 col-lg-6">
        <h6 class="row col-4 col-md-6 title">Skills</h6>
        <div id = "small-button"></div>
        <div class="input-group mb-3 col-6 col-md-6">
        <input type="text" class="form-control row" placeholder="Add a skill" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
        </div>
        </div>
        </div>
        </div>
        </div>`;
        return div ;
    }
    const buttonsTemplate = (skill) => {`<div class="add-skills" id='small-button'>
    <button class="btn larger btn-dark" disabled>${skill}<i class="far fa-window-close btn btn-secondary padd" type="button" data-toggle="modal" data-target="#exampleModalCenter"></i></button>
    </div>`;
    return buttonsTemplate; 
};

});



