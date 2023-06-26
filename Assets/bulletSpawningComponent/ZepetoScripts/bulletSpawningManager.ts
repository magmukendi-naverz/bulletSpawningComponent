import { GameObject, Input, KeyCode, Transform, Vector3, Quaternion, Object, Rigidbody } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InstantiateObject from '../../Zepeto Multiplay Component/ZepetoScript/Sample Code/InstantiateObject';
import { Button } from 'UnityEngine.UI';
import * as UnityEngine from 'UnityEngine';
import { KnowSockets, ZepetoCharacter, ZepetoPlayers } from 'ZEPETO.Character.Controller';


export default class BulletSpawner extends ZepetoScriptBehaviour {

    @SerializeField() private bullet: GameObject;
    private InitialTransform: Transform;
    @SerializeField() private fireButton: Button;
    
    private _localCharacter: ZepetoCharacter;
    @SerializeField() private parentContainer: UnityEngine.GameObject;

    Start() {    

        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(()=>
        {
            this._localCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character
        })
        this.fireButton.onClick.AddListener(()=>{
            this.fireBullet()
            console.log("The bullet was fired")
        })
    }


    private fireBullet()
    {
        const newBullet = UnityEngine.GameObject.Instantiate(this.bullet, this._localCharacter.GetSocket(KnowSockets.HEAD_UPPER).position,this._localCharacter.transform.rotation, this.parentContainer.transform) as GameObject;
        newBullet.GetComponent<Rigidbody>().AddForce(newBullet.transform.forward * 1000)
        
    }
    Update()
    {
        if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            this.SpawnBullet(this.InitialTransform.position, this.InitialTransform.rotation)
        }
    } 

    private SpawnBullet( position: Vector3, rotation:Quaternion):void
    {
        let InstantiateBullet = Object.Instantiate(this.bullet, position, rotation)
        
        
    }

}