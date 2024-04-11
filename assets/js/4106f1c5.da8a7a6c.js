"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[842],{7049:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=i(5893),s=i(1151);const o={sidebar_position:4},t="Consumer Initiated Slashing",a={id:"features/slashing",title:"Consumer Initiated Slashing",description:"A consumer chain is essentially a regular Cosmos-SDK based chain that uses the Interchain Security module to achieve economic security by stake deposited on the provider chain, instead of its own chain.",source:"@site/docs/features/slashing.md",sourceDirName:"features",slug:"/features/slashing",permalink:"/interchain-security/features/slashing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ICS Provider Proposals",permalink:"/interchain-security/features/proposals"},next:{title:"Developing an ICS consumer chain",permalink:"/interchain-security/consumer-development/app-integration"}},d={},h=[{value:"Downtime Infractions",id:"downtime-infractions",level:2},{value:"Equivocation Infractions",id:"equivocation-infractions",level:2},{value:"Report equivocation infractions through CLI",id:"report-equivocation-infractions-through-cli",level:3},{value:"Report equivocation infractions with Hermes",id:"report-equivocation-infractions-with-hermes",level:3}];function c(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"consumer-initiated-slashing",children:"Consumer Initiated Slashing"}),"\n",(0,r.jsx)(e.p,{children:"A consumer chain is essentially a regular Cosmos-SDK based chain that uses the Interchain Security module to achieve economic security by stake deposited on the provider chain, instead of its own chain.\nIn essence, provider chain and consumer chains are different networks (different infrastructures) that are bound together by the provider's validator set. By being bound to the provider's validator set, a consumer chain inherits the economic security guarantees of the provider chain (in terms of total stake)."}),"\n",(0,r.jsx)(e.p,{children:"To maintain the proof of stake model, the consumer chain is able to send evidence of infractions (double signing and downtime) to the provider chain so the offending validators can be penalized.\nAny infraction committed on any of the consumer chains is reflected on the provider and all other consumer chains."}),"\n",(0,r.jsx)(e.p,{children:"In the current implementation there are two important changes brought by the Interchain Security module."}),"\n",(0,r.jsx)(e.h2,{id:"downtime-infractions",children:"Downtime Infractions"}),"\n",(0,r.jsx)(e.p,{children:"Downtime infractions are reported by consumer chains and are acted upon on the provider as soon as the provider receives the infraction evidence."}),"\n",(0,r.jsx)(e.p,{children:"Instead of slashing, the provider will only jail offending validator for the duration of time established by the chain parameters."}),"\n",(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/interchain-security/adrs/adr-002-throttle",children:"Slash throttling"})," (sometimes called jail throttling) mechanism ensures that only a fraction of the validator set can be jailed at any one time to prevent malicious consumer chains from harming the provider."]})}),"\n",(0,r.jsx)(e.h2,{id:"equivocation-infractions",children:"Equivocation Infractions"}),"\n",(0,r.jsxs)(e.p,{children:["Equivocation infractions are reported by external agents (e.g., relayers) that can submit to the provider evidence of light client or double signing attacks observed on a consumer chain.\nThe evidence is submitted by sending ",(0,r.jsx)(e.code,{children:"MsgSubmitConsumerMisbehaviour"})," or ",(0,r.jsx)(e.code,{children:"MsgSubmitConsumerDoubleVoting"})," transactions to the provider.\nWhen valid evidence is received, the malicious validators are slashed, jailed, and tombstoned on the provider.\nThis is enabled through the ",(0,r.jsx)(e.em,{children:"cryptographic verification of equivocation"})," feature.\nFor more details, see ",(0,r.jsx)(e.a,{href:"/interchain-security/adrs/adr-005-cryptographic-equivocation-verification",children:"ADR-005"})," and ",(0,r.jsx)(e.a,{href:"/interchain-security/adrs/adr-013-equivocation-slashing",children:"ADR-013"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"report-equivocation-infractions-through-cli",children:"Report equivocation infractions through CLI"}),"\n",(0,r.jsx)(e.p,{children:"The ICS provider module offers two commands for submitting evidence of misbehavior originating from a consumer chain.\nBelow are two examples illustrating the process on Cosmos Hub."}),"\n",(0,r.jsx)(e.p,{children:"Use the following command to submit evidence of double signing attacks:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"gaiad tx provider submit-consumer-double-voting [path/to/evidence.json] [path/to/infraction_header.json] --from node0 --home ../node0 --chain-id $CID \n"})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)("summary",{children:["Example of ",(0,r.jsx)(e.code,{children:"evidence.json"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "vote_a": {\n        "type": 1,\n        "height": 25,\n        "round": 0,\n        "block_id": {\n            "hash": "tBBWTqjECl31S/clZGoxLdDqs93kTvy3qhpPqET/laY=",\n            "part_set_header": {\n                "total": 1,\n                "hash": "ai2qCLgVZAFph4FJ4Cqw5QW1GZKR4zjOv0bI/Um5AIc="\n            }\n        },\n        "timestamp": "2023-11-20T12:57:54.565207Z",\n        "validator_address": "aCG1hw85Zz7Ylgpsy263IJVJEMA=",\n        "signature": "y9yILm9hmv45BZwAaaq9mS1FpH7QeAIJ5Jkcc3U2/k5uks9cuqr4NTIwaIrqMSMKwxVyqiR56xmCT59a6AngAA=="\n    },\n    "vote_b": {\n        "type": 1,\n        "height": 25,\n        "round": 0,\n        "block_id": {\n            "hash": "3P06pszgPatuIdLTP5fDWiase4SYHIq9YXGSbRk9/50=",\n            "part_set_header": {\n                "total": 1,\n                "hash": "S+SbOMxFRzfeNNpX9/jyFMz94VwBKk7Dpx6ZyvSYyNU="\n            }\n        },\n        "timestamp": "2023-11-20T12:57:54.599273Z",\n        "validator_address": "aCG1hw85Zz7Ylgpsy263IJVJEMA=",\n        "validator_index": 0,\n        "signature": "DGFcn4Um1t2kXW60+JhMk5cj7ZFdE5goKVOGiZkLwnNv43+6aGmOWjoq0SHYVzM4MwSwOwbhgZNbkWX+EHGUBw=="\n    },\n    "total_voting_power": 300,\n    "validator_power": 100,\n    "timestamp": "2023-11-20T12:57:51.267308Z"\n}\n'})})})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)("summary",{children:["Example of ",(0,r.jsx)(e.code,{children:"infraction_header.json"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "signed_header": {\n        "header": {\n            "version": {\n                "block": 11,\n                "app": 2\n            },\n            "chain_id": "consumer",\n            "height": 22,\n            "time": "2023-11-20T12:57:40.479686Z",\n            "last_block_id": {\n                "hash": "L63hyLJ+y9+fpb7WYKdmmBhPHwbfEGQEuKmvGzyBPiY=",\n                "part_set_header": {\n                    "total": 18,\n                    "hash": "euzRQjN7MjGtM6skXM4B8wOgAldWGfZSJRA9JRlO42s="\n                }\n            },\n            "last_commit_hash": "qdDJwVziW3pPqmf8QDGZG+5HVd3OF7fCVh2Z8KQqNVU=",\n            "data_hash": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",\n            "validators_hash": "pVc+gSYkGesaP3OkK4ig3DBi4o9/GCdXGtO/PQ6i/Ik=",\n            "next_validators_hash": "pVc+gSYkGesaP3OkK4ig3DBi4o9/GCdXGtO/PQ6i/Ik=",\n            "consensus_hash": "BICRvH3cKD93v7+R1zxE2ljD34qcvIZ0Bdi389qtoi8=",\n            "app_hash": "Yu3HX62w7orbbY/pm2QEK7yIwR+AlNdjSSqiK1kmuJM=",\n            "last_results_hash": "Yu3HX62w7orbbY/pm2QEK7yIwR+AlNdjSSqiK1kmuJM=",\n            "evidence_hash": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",\n            "proposer_address": "aCG1hw85Zz7Ylgpsy263IJVJEMA="\n        },\n        "commit": {\n            "height": 22,\n            "round": 1,\n            "block_id": {\n                "hash": "PKrS32IEZoFY2q2S3iQ68HQL751ieBhf5Eu/Y5Z/QPg=",\n                "part_set_header": {\n                    "total": 1,\n                    "hash": "8UuA7Oqw5AH/KOacpmHVSMOIDe4l2eC8VmdH2mzcpiM="\n                }\n            },\n            "signatures": [\n                {\n                    "block_id_flag": 2,\n                    "validator_address": "aCG1hw85Zz7Ylgpsy263IJVJEMA=",\n                    "timestamp": "2023-11-20T12:57:44.076538Z",\n                    "signature": "bSOH4+Vg2I37zeJphOguGOD0GK3JzM1ghSgJd0UlW/DHn1u9Hvv4EekHuCu6qwRLZcuS/ZxNlmr9qYNfxX3bDA=="\n                },\n                {\n                    "block_id_flag": 2,\n                    "validator_address": "i/A830FM7cfmA8yTn9n3xBg5XpU=",\n                    "timestamp": "2020-01-02T00:07:00Z",\n                    "signature": "7bXSDtlOwGK/gLEsFpTWOzm2TFoaARrWQUpbgWEwKtLlUs7iE06TOvJ3yPPfTfqqN/qYnvxxgjl0M0EhUWu5Bg=="\n                },\n                {\n                    "block_id_flag": 2,\n                    "validator_address": "lrQDkJ2fk7UAgNzRZfcwMKSYa2E=",\n                    "timestamp": "2023-11-20T12:57:44.076519Z",\n                    "signature": "Pb6G4bCg4wafmV89WNnzXxbSCknZUHnSQfSCE5QMFxPtSUIN4A7SK5m7yltqMJF5zkyenlFiEI4J3OZ4KCjCAw=="\n                },\n                {\n                    "block_id_flag": 2,\n                    "validator_address": "+R94nXSeM1Z49e/CXpyHT3M+h3k=",\n                    "timestamp": "2023-11-20T12:57:44.057451Z",\n                    "signature": "j3EasIHNYA6MxW/PiWyruzHsjVsBV9t11W6Qx800WMm/+P+CkfR+UZAp7MPTvKZEZFuh3GUsBtyfb/vA+jJWCw=="\n                }\n            ]\n        }\n    },\n    "validator_set": {\n        "validators": [\n            {\n                "address": "aCG1hw85Zz7Ylgpsy263IJVJEMA=",\n                "pub_key": {\n                    "ed25519": "dtn+SfD+4QLo0+t0hAoP6Q2sGjh0XEI3LWVG+doh3u0="\n                },\n                "voting_power": 100,\n                "proposer_priority": -200\n            },\n            {\n                "address": "lrQDkJ2fk7UAgNzRZfcwMKSYa2E=",\n                "pub_key": {\n                    "ed25519": "UgN2JsjPy2WLh7dzJRBkUQtdgNoT4/uGj7kbIVqqHT8="\n                },\n                "voting_power": 100,\n                "proposer_priority": 100\n            },\n            {\n                "address": "+R94nXSeM1Z49e/CXpyHT3M+h3k=",\n                "pub_key": {\n                    "ed25519": "5svW8261x+cZosp2xIhqzgt2tyuawrSDyHlpbgS3BC4="\n                },\n                "voting_power": 100,\n                "proposer_priority": 100\n            },\n            {\n                "address": "aCG1hw85Zz7Ylgpsy263IJVJEMA=",\n                "pub_key": {\n                    "ed25519": "dtn+SfD+4QLo0+t0hAoP6Q2sGjh0XEI3LWVG+doh3u0="\n                },\n                "voting_power": 100,\n                "proposer_priority": -200\n            }\n        ],\n        "proposer": {\n            "address": "VUz+QceJ8Nu7GbJuVItwsfVjybA=",\n            "pub_key": {\n                "ed25519": "0s8KDTgEcwmOBrHWvV7mtBlItJ3upgM1FJsciwREdy4="\n            },\n            "voting_power": 1,\n            "proposer_priority": -3\n        }\n    },\n    "trusted_height": {\n        "revision_height": 18\n    },\n    "trusted_validators": {\n        "validators": [\n            {\n                "address": "VUz+QceJ8Nu7GbJuVItwsfVjybA=",\n                "pub_key": {\n                    "ed25519": "0s8KDTgEcwmOBrHWvV7mtBlItJ3upgM1FJsciwREdy4="\n                },\n                "voting_power": 1,\n                "proposer_priority": -3\n            },\n            {\n                "address": "i/A830FM7cfmA8yTn9n3xBg5XpU=",\n                "pub_key": {\n                    "ed25519": "FCmIw7hSuiAoWk/2f4LuGQ+3zx5101xiqU8DoC5wGkg="\n                },\n                "voting_power": 1,\n                "proposer_priority": 1\n            },\n            {\n                "address": "2DrZF0roNnnvEy4NS2aY811ncKg=",\n                "pub_key": {\n                    "ed25519": "MI9c6sphsWlx0RAHCYOjMRXMFkTUaEYwOiOKG/0tsMs="\n                },\n                "voting_power": 1,\n                "proposer_priority": 1\n            },\n            {\n                "address": "73aN0uOc5b/Zfq2Xcjl0kH2r+tw=",\n                "pub_key": {\n                    "ed25519": "gWNcDup4mdnsuqET4QeFRzVb+FnSP4Vz3iNMj5wvWXk="\n                },\n                "voting_power": 1,\n                "proposer_priority": 1\n            }\n        ],\n        "proposer": {\n            "address": "VUz+QceJ8Nu7GbJuVItwsfVjybA=",\n            "pub_key": {\n                "ed25519": "0s8KDTgEcwmOBrHWvV7mtBlItJ3upgM1FJsciwREdy4="\n            },\n            "voting_power": 1,\n            "proposer_priority": -3\n        }\n    }\n}\n'})})})})]}),"\n",(0,r.jsx)(e.p,{children:"Use the following command to submit evidence of light client attacks:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"gaiad tx provider submit-consumer-misbehaviour [path/to/misbehaviour.json] --from node0 --home ../node0 --chain-id $CID\n"})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)("summary",{children:["Example of ",(0,r.jsx)(e.code,{children:"misbehaviour.json"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "client_id": "07-tendermint-0",\n    "header_1": {\n        "signed_header": {\n            "header": {\n                "version": {\n                    "block": "11",\n                    "app": "2"\n                },\n                "chain_id": "testchain2",\n                "height": "19",\n                "time": "2020-01-02T00:08:10Z",\n                "last_block_id": {\n                    "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",\n                    "part_set_header": {\n                        "total": 10000,\n                        "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="\n                    }\n                },\n                "last_commit_hash": "dPJh3vUG5ls8NeP/SBSEkIgTOzrkFOROqhKnuk2zRgc=",\n                "data_hash": "bW4ouLmLUycELqUKV91G5syFHHLlKL3qpu/e7v5moLg=",\n                "validators_hash": "ImwBH++bKKkm2NDCwOxRn04P5GWWypgzeLVZWoc10+I=",\n                "next_validators_hash": "ImwBH++bKKkm2NDCwOxRn04P5GWWypgzeLVZWoc10+I=",\n                "consensus_hash": "5eVmxB7Vfj/4zBDxhBeHiLj6pgKwfPH0JSF72BefHyQ=",\n                "app_hash": "dPJh3vUG5ls8NeP/SBSEkIgTOzrkFOROqhKnuk2zRgc=",\n                "last_results_hash": "CS4FhjAkftYAmGOhLu4RfSbNnQi1rcqrN/KrNdtHWjc=",\n                "evidence_hash": "c4ZdsI9J1YQokF04mrTKS5bkWjIGx6adQ6Xcc3LmBxQ=",\n                "proposer_address": "CbKqPquy50bcrY7JRdW7zXybSuA="\n            },\n            "commit": {\n                "height": "19",\n                "round": 1,\n                "block_id": {\n                    "hash": "W2xVqzPw03ZQ1kAMpcpht9WohwMzsGnyKKNjPYKDF6U=",\n                    "part_set_header": {\n                        "total": 3,\n                        "hash": "hwgKOc/jNqZj6lwNm97vSTq9wYt8Pj4MjmYTVMGDFDI="\n                    }\n                },\n                "signatures": [\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                        "timestamp": "2020-01-02T00:08:10Z",\n                        "signature": "PGTquCtnTNFFY5HfEFz9f9pA7PYqjtQfBwHq6cxF/Ux8OI6nVqyadD9a84Xm7fSm6mqdW+T6YVfqIKmIoRjJDQ=="\n                    },\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "Ua+R3vfKH1LWhRg/k8PbA/uSLnc=",\n                        "timestamp": "2020-01-02T00:08:10Z",\n                        "signature": "0e39yoBorwORAH/K9qJ7D1N1Yr7CutMiQJ+oiIK39eMhuoK3UWzQyMGRLzDOIDupf8yD99mvGVVAlNIODlV3Dg=="\n                    },\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "Uns+2wsfv6IYTpOnYfAnPplVzTE=",\n                        "timestamp": "2020-01-02T00:08:10Z",\n                        "signature": "lhc2tkwydag9D1iLQhdDCE8GgrHP94M1LbHFYMoL9tExaEq6RiFW/k71TQH5x96XQ9XYOznMIHKC2BDh4GlnAQ=="\n                    },\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "sS7FyKFPDEG7StI+4o3+6fZy1pY=",\n                        "timestamp": "2020-01-02T00:08:10Z",\n                        "signature": "8xeSBf0nSFs/X/rQ9CZLzwkJJhQBLA2jKdPGP3MlULxm992XxrOsIYq47u1daxvSsn6ql5OVYjzBNU0qbPpvCA=="\n                    }\n                ]\n            }\n        },\n        "validator_set": {\n            "validators": [\n                {\n                    "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                    "pub_key": {\n                        "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "-3"\n                },\n                {\n                    "address": "Ua+R3vfKH1LWhRg/k8PbA/uSLnc=",\n                    "pub_key": {\n                        "ed25519": "H+7myYFFaCBTAxPiYaTX4IZIRtaUu+rcJVp+doLxd8c="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "Uns+2wsfv6IYTpOnYfAnPplVzTE=",\n                    "pub_key": {\n                        "ed25519": "QMHyl6i2OjmMEh73VXS5QBdsQ1vQ2mU3XzKGAhnKqmc="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "sS7FyKFPDEG7StI+4o3+6fZy1pY=",\n                    "pub_key": {\n                        "ed25519": "uSNKjObXRHsNslEdqdublnVDa4Vc2aoCpr0j+Fuvv5U="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                }\n            ],\n            "proposer": {\n                "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                "pub_key": {\n                    "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                },\n                "voting_power": "1",\n                "proposer_priority": "-3"\n            },\n            "total_voting_power": "0"\n        },\n        "trusted_height": {\n            "revision_number": "0",\n            "revision_height": "18"\n        },\n        "trusted_validators": {\n            "validators": [\n                {\n                    "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                    "pub_key": {\n                        "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "-3"\n                },\n                {\n                    "address": "Ua+R3vfKH1LWhRg/k8PbA/uSLnc=",\n                    "pub_key": {\n                        "ed25519": "H+7myYFFaCBTAxPiYaTX4IZIRtaUu+rcJVp+doLxd8c="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "Uns+2wsfv6IYTpOnYfAnPplVzTE=",\n                    "pub_key": {\n                        "ed25519": "QMHyl6i2OjmMEh73VXS5QBdsQ1vQ2mU3XzKGAhnKqmc="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "sS7FyKFPDEG7StI+4o3+6fZy1pY=",\n                    "pub_key": {\n                        "ed25519": "uSNKjObXRHsNslEdqdublnVDa4Vc2aoCpr0j+Fuvv5U="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                }\n            ],\n            "proposer": {\n                "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                "pub_key": {\n                    "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                },\n                "voting_power": "1",\n                "proposer_priority": "-3"\n            },\n            "total_voting_power": "0"\n        }\n    },\n    "header_2": {\n        "signed_header": {\n            "header": {\n                "version": {\n                    "block": "11",\n                    "app": "2"\n                },\n                "chain_id": "testchain2",\n                "height": "19",\n                "time": "2020-01-02T00:08:20Z",\n                "last_block_id": {\n                    "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",\n                    "part_set_header": {\n                        "total": 10000,\n                        "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="\n                    }\n                },\n                "last_commit_hash": "dPJh3vUG5ls8NeP/SBSEkIgTOzrkFOROqhKnuk2zRgc=",\n                "data_hash": "bW4ouLmLUycELqUKV91G5syFHHLlKL3qpu/e7v5moLg=",\n                "validators_hash": "ImwBH++bKKkm2NDCwOxRn04P5GWWypgzeLVZWoc10+I=",\n                "next_validators_hash": "ImwBH++bKKkm2NDCwOxRn04P5GWWypgzeLVZWoc10+I=",\n                "consensus_hash": "5eVmxB7Vfj/4zBDxhBeHiLj6pgKwfPH0JSF72BefHyQ=",\n                "app_hash": "dPJh3vUG5ls8NeP/SBSEkIgTOzrkFOROqhKnuk2zRgc=",\n                "last_results_hash": "CS4FhjAkftYAmGOhLu4RfSbNnQi1rcqrN/KrNdtHWjc=",\n                "evidence_hash": "c4ZdsI9J1YQokF04mrTKS5bkWjIGx6adQ6Xcc3LmBxQ=",\n                "proposer_address": "CbKqPquy50bcrY7JRdW7zXybSuA="\n            },\n            "commit": {\n                "height": "19",\n                "round": 1,\n                "block_id": {\n                    "hash": "IZM8NKS+8FHB7CBmgB8Nz7BRVVXiiyqMQDvHFUvgzxo=",\n                    "part_set_header": {\n                        "total": 3,\n                        "hash": "hwgKOc/jNqZj6lwNm97vSTq9wYt8Pj4MjmYTVMGDFDI="\n                    }\n                },\n                "signatures": [\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                        "timestamp": "2020-01-02T00:08:20Z",\n                        "signature": "pLIEZ4WSAtnMsgryujheHSq4+YG3RqTfMn2ZxgEymr0wyi+BNlQAKRtRfesm0vfYxvjzc/jhGqtUqHtSIaCwCQ=="\n                    },\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "Ua+R3vfKH1LWhRg/k8PbA/uSLnc=",\n                        "timestamp": "2020-01-02T00:08:20Z",\n                        "signature": "XG7iTe/spWyTUkT7XDzfLMpYqrdyqizE4/X4wl/W+1eaQp0WsCHYnvPU3x9NAnYfZzaKdonZiDWs7wacbZTcDg=="\n                    },\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "Uns+2wsfv6IYTpOnYfAnPplVzTE=",\n                        "timestamp": "2020-01-02T00:08:20Z",\n                        "signature": "TqegK7ORuICSy++wVdPHt8fL2WfPlYsMPv1XW79wUdcjnQkezOM50OSqYaP4ua5frIZsn+sWteDrlqFTdkl3BA=="\n                    },\n                    {\n                        "block_id_flag": "BLOCK_ID_FLAG_COMMIT",\n                        "validator_address": "sS7FyKFPDEG7StI+4o3+6fZy1pY=",\n                        "timestamp": "2020-01-02T00:08:20Z",\n                        "signature": "dhvp3XlIaCxx5MFDs0TCkAPHSm0PS2EtJzYAx2c/7MWdLwUJFZrAUTeimQE2c9i9ro91cjZn/vI0/oFRXab6Aw=="\n                    }\n                ]\n            }\n        },\n        "validator_set": {\n            "validators": [\n                {\n                    "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                    "pub_key": {\n                        "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "-3"\n                },\n                {\n                    "address": "Ua+R3vfKH1LWhRg/k8PbA/uSLnc=",\n                    "pub_key": {\n                        "ed25519": "H+7myYFFaCBTAxPiYaTX4IZIRtaUu+rcJVp+doLxd8c="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "Uns+2wsfv6IYTpOnYfAnPplVzTE=",\n                    "pub_key": {\n                        "ed25519": "QMHyl6i2OjmMEh73VXS5QBdsQ1vQ2mU3XzKGAhnKqmc="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "sS7FyKFPDEG7StI+4o3+6fZy1pY=",\n                    "pub_key": {\n                        "ed25519": "uSNKjObXRHsNslEdqdublnVDa4Vc2aoCpr0j+Fuvv5U="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                }\n            ],\n            "proposer": {\n                "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                "pub_key": {\n                    "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                },\n                "voting_power": "1",\n                "proposer_priority": "-3"\n            },\n            "total_voting_power": "0"\n        },\n        "trusted_height": {\n            "revision_number": "0",\n            "revision_height": "18"\n        },\n        "trusted_validators": {\n            "validators": [\n                {\n                    "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                    "pub_key": {\n                        "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "-3"\n                },\n                {\n                    "address": "Ua+R3vfKH1LWhRg/k8PbA/uSLnc=",\n                    "pub_key": {\n                        "ed25519": "H+7myYFFaCBTAxPiYaTX4IZIRtaUu+rcJVp+doLxd8c="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "Uns+2wsfv6IYTpOnYfAnPplVzTE=",\n                    "pub_key": {\n                        "ed25519": "QMHyl6i2OjmMEh73VXS5QBdsQ1vQ2mU3XzKGAhnKqmc="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                },\n                {\n                    "address": "sS7FyKFPDEG7StI+4o3+6fZy1pY=",\n                    "pub_key": {\n                        "ed25519": "uSNKjObXRHsNslEdqdublnVDa4Vc2aoCpr0j+Fuvv5U="\n                    },\n                    "voting_power": "1",\n                    "proposer_priority": "1"\n                }\n            ],\n            "proposer": {\n                "address": "CbKqPquy50bcrY7JRdW7zXybSuA=",\n                "pub_key": {\n                    "ed25519": "sUkpD9xhOgWna0dv4bSwI7N7CkyH6q1bBDPYhjRolaY="\n                },\n                "voting_power": "1",\n                "proposer_priority": "-3"\n            },\n            "total_voting_power": "0"\n        }\n    }\n}\n'})})})})]}),"\n",(0,r.jsx)(e.h3,{id:"report-equivocation-infractions-with-hermes",children:"Report equivocation infractions with Hermes"}),"\n",(0,r.jsxs)(e.p,{children:["Ensure you have a well-configured Hermes ",(0,r.jsx)(e.code,{children:"v1.7.3+"})," relayer effectively relaying packets between a consumer chain and a provider chain.\nThe following command demonstrates how to run a Hermes instance in ",(0,r.jsx)(e.em,{children:"evidence mode"})," to detect misbehaviors on a consumer chain and automatically submit the evidence to the provider chain."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"hermes evidence --chain <CONSUMER-CHAIN-ID>\n"})}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"hermes evidence"})," takes a ",(0,r.jsx)(e.code,{children:"--check-past-blocks"})," option giving the possibility to look for older evidence (default is 100)."]})})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>t});var r=i(7294);const s={},o=r.createContext(s);function t(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);