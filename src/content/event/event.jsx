import React, {Component} from 'react';

class form extends Component {
    constructor (props) {
        super (props);
        this.state = {
            nama : '',
            alamat: '',
            hobi : '',
            umur : null
        }
    }

    onChangeHandler = (event) => {
        event.preventDefauld () ;
        let umur = this.state.umur;
        if (!Number(umur)) {
            alert ("silahkan isi usia anda terlebih dahulu");
        }
    }

    onChangeHandler =(event) => {
        let nama = event.target.name;
        let alamat = event.target.alamat;
        let hobi = event.target.hobi;
        let val = event.target.value;
        this.setstate({
            [nama] : val,
            [alamat] : val,
            [hobi]:''
        })
    }

    render () {
        return (
            <div className="wrapperform">
            <form onSubmit={this.onSubmitHandler}>
                <h1>halo {this.state.name}</h1>
                <input type="text" onChange={this.onChangeHandler} name="nama" className="text"/>
                <h1>sebutkan salah satu hoby kamu {this.state.hobi}</h1>
                <input type="text" onChange={this.onChangeHandler} name="hobi" className="text"/>
                <h1>umur kamu adalah {this.state.umur}</h1>
                <input type="text" onChange={this.onChangeHandler} name="umur" className="text"/>
                <h1>alamat tinggal {this.state.alamat}</h1>
                <textarea onChange={this.onChangeHandler} name="alamat" className="textarea"/>
                <hr/>
                <input type="submit" onClick={this.updateState} value="simpan data" className="button"/>
            </form>
            </div>
        );
    }
}

export default form;