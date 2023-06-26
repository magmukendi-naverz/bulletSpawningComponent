import { Collider, Collision, GameObject, Rigidbody, Transform } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'



export default class BulletSpawnScript extends ZepetoScriptBehaviour {


    OnTriggerEnter(col: Collider)
    {
        if(!col.CompareTag("Player"))
        {
            GameObject.Destroy(this.gameObject)
            console.log("The projectile was destroyed")
        }
    }

}